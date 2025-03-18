import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import BaseTreeData from './json';
import { Tree } from 'antd';

const { TreeNode } = Tree;

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

  // 处理拖拽结束
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    // 目标容器内部排序
    if (source.droppableId === 'target' && destination.droppableId === 'target') {
      const items = reorder(targetItems, source.index, destination.index);
      setTargetItems(items);
    }
    // 从源到目标的拖拽
    else if (source.droppableId === 'source' && destination.droppableId === 'target') {
      const sourceItem = sourceItems[source.index];
      
      // 生成唯一ID并记录使用状态
      const newItem = { 
        ...sourceItem,
        uid: `${sourceItem.code}-${Date.now()}`
      };
      
      setTargetItems(prev => {
        const newTarget = Array.from(prev);
        newTarget.splice(destination.index, 0, newItem);
        return newTarget;
      });

      // 标记该源项目已被使用
      setUsedSourceIds(prev => new Set(prev).add(sourceItem.code));
    }
  };

  // 删除目标项
  const handleDelete = (data) => {
    setTargetItems(prev => prev.filter(item => item.uid !== data.uid));
    // 移除标记该源项目已被使用的
    setUsedSourceIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(data.code);
      return newSet;
    });
  };

  const renderTreeNodes = (data) =>
    data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.name} key={item.code} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.code} {...item} />;
    });

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* 源菜单 - 带置灰效果 */}
        <Droppable droppableId="source" isDropDisabled={true}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                width: '200px',
                border: '1px solid #ddd',
                padding: '10px'
              }}
            >
              <h3>源菜单</h3>
              <Tree>
                {renderTreeNodes(sourceItems)}
              </Tree>
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
                width: '200px',
                border: '1px solid #ddd',
                padding: '10px'
              }}
            >
              <h3>目标菜单</h3>
              <Tree>
                {renderTreeNodes(targetItems)}
              </Tree>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}