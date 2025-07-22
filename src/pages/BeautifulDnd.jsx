import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import BaseTreeData from './json'
import Tree from './Tree';

// 初始源数据
const initialSourceMenus = [
  { id: 'platform', text: '平台概况' },
  { id: 'device-input', text: '设备输入' },
  { id: 'super-device', text: '超级设备管理' },
  { id: 'app-service', text: '应用与服务' },
  { id: 'data-manage', text: '数据管理' },
  { id: 'system-manage', text: '系统管理' },
];

export default function DragMenu() {
  const [sourceItems] = useState(BaseTreeData);
  const [targetItems, setTargetItems] = useState([]);
  const [usedSourceIds, setUsedSourceIds] = useState(new Set()); // 新增：记录已使用的源ID

  // 重新排序函数
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // 查找项
  const finedObject = (data, code, callback) => {
    data.forEach((item, index) => {
      if (item.code === code) {
        return callback(index, data, item)
      }
      if (item.children) {
        finedObject(item.children, code, callback)
      }
    })
  }

  // 递归导出code
  const exportCode = (data, codes) => {
    data.forEach(item => {
      codes.push(item.code);
      if (item.children) {
        exportCode(item.children, codes);
      }
    });
  }

  // 根据code查找节点并删除当前节点包括含children的节点，返回删除后的数组
  const deleteNode = (data, code) => {
    return data.filter(item => {
      if (item.code === code) {
        return false;
      }
      if (item.children) {
        item.children = deleteNode(item.children, code);
      }
      return true;
    });
  }

  // 根据code查找在树结构中是否存在
  const existsInTree = (data, code) => {
    for (const item of data) {
      if (item.code === code) return true;
      if (item.children && existsInTree(item.children, code)) return true;
    }
    return false;
  };

  // 根据code查找树结构中的index位置，并将指定节点插入此位置同级  返回新的树结构
  const insertNode = (data, code, node) => {
    if (!data.length && Object.keys(node).length) return [{...node}];
    if (!existsInTree(data, code)) {
      return [...data, node];
    }
    const result = Array.from(data);
    let insertIndex = 0
    result.map((item, index) => {
      if (item.code === code) {
       insertIndex = index
      }
    });
    result.splice(insertIndex, 0, node);
    console.log('insertIndex==', insertIndex, 'result==', result)
    return result;
  }

  // 处理拖拽结束
  const onDragEnd = (result) => {
    console.log('result', result);
    const { source, destination, draggableId } = result;

    if (!destination) return;

    // 目标容器内部排序
    if (source.droppableId === 'target' && destination.droppableId === 'target') {
      const items = reorder(targetItems, source.index, destination.index);
      setTargetItems(items);
    }
    // 从源到目标的拖拽
    else if (source.droppableId === 'source' && destination.droppableId === 'target') {
      finedObject(sourceItems, source.index, (index, data, item) => {
        // 生成唯一ID并记录使用状态
        const newItem = { 
          ...item,
          uid: `${item.code}-${Date.now()}`
        };
        
        setTargetItems(insertNode(targetItems, destination.index, newItem));

        const codes = [];
        exportCode([item], codes);
        // 标记该源项目已被使用
        setUsedSourceIds(prev => {
          const newSet = new Set(prev);
          codes.forEach(code => newSet.add(code));
          return newSet;
        });
      });
    }
  };

  // 删除目标项
  const handleDelete = (data) => {
    console.log('data', data)
    setTargetItems(prev => deleteNode(prev, data.code));
    // 移除标记该源项目已被使用的
    const codes = [];
      exportCode([data], codes);
    setUsedSourceIds(prev => {
      const newSet = new Set(prev);
      codes.forEach(code => newSet.delete(code));
      return newSet;
    });
  };

  const onTreeDrop = (info ) => {
    console.log('info', info)
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const data = [...targetItems];
    let dragObj;

    finedObject(data, dragKey, (index, arr, item) => {
      arr.splice(index, 1);
      dragObj = item;
      dragObj.parentId = '';
    });

    if (!info.dropToGap) {
      finedObject(data, dropKey, (_i, _arr, item) => {
        item.children = item.children || [];
        dragObj.parentId = item.id;

        item.children.unshift(dragObj);
      });
    } else if (
      ((info.node).props.children || []).length > 0 &&
      (info.node).props.expanded &&
      dropPosition === 1
    ) {
      finedObject(data, dropKey, (_i, _arr, item) => {
        item.children = item.children || [];
        dragObj.parentId = item.id;

        item.children.unshift(dragObj);
      });
    } else {
      let ar = [];
      let i;
      finedObject(data, dropKey, (index, arr, item) => {
        ar = arr;
        i = index;
        dragObj.parentId = item.parentId;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setTargetItems([...data]);
    console.log('data', data)
  }

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* 源菜单 - 带置灰效果 */}
        <Droppable droppableId="source" isDropDisabled={true}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              style={{
                ...provided.droppableProps.style,
                width: '500px',
                border: '1px solid #ddd',
                padding: '10px'
              }}
            >
              <h3>源菜单</h3>
              <Tree treeData={sourceItems} type="source" usedSourceIds={usedSourceIds} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* 目标容器 */}
        <Droppable droppableId="target">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                width: '500px',
                border: '1px solid #ddd',
                padding: '10px'
              }}
            >
              <h3>目标菜单</h3>
              <Tree treeData={targetItems} type="target" handleDelete={handleDelete} onTreeDrop={onTreeDrop} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}