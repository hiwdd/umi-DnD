import React from 'react';
import { Tree } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';
import BaseTreeData from './json'
import './App.css';

const ItemTypes = {
  MENU_ITEM: 'menuItem',
};

// 原始数据
const sourceData = [...BaseTreeData];

const DraggableNode = ({ node }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.MENU_ITEM,
    item: { ...node, uid: uuidv4() },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '4px 0',
      }}
    >
      {node.name}
    </div>
  );
};

const RightContainer = ({ data, onDrop, onReorder }) => {
  const [{ canDrop }, drop] = useDrop({
    accept: ItemTypes.MENU_ITEM,
    drop: (item, monitor) => {
      if (!monitor.didDrop()) {
        onDrop(item);
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  });

  const handleDrop = (info) => {
    const dragNode = info.dragNode;
    const dropNode = info.node;
    const dropPosition = info.dropPosition;

    // 处理内部拖拽排序
    onReorder({
      dragNode,
      dropNode,
      dropPosition
    });
  };

  return (
    <div
      ref={drop}
      style={{
        border: canDrop ? '2px dashed #1890ff' : '1px solid #d9d9d9',
        minHeight: 400,
        padding: 16,
      }}
    >
      <Tree
        blockNode
        draggable
        treeData={data}
        onDrop={handleDrop}
        titleRender={(node) => <div>{node.name}</div>}
      />
    </div>
  );
};

const App = () => {
  const [rightData, setRightData] = React.useState([]);

  const handleDrop = (item) => {
    const newItem = {
      ...item,
      key: item.code,
      name: item.name,
      isLeaf: true
    };

    setRightData(prev => {
      // 避免重复添加
      if (prev.some(i => i.code === newItem.code)) return prev;
      return [...prev, newItem];
    });
  };

  const handleReorder = ({ dragNode, dropNode, dropPosition }) => {
    const data = [...rightData];
    const dragKey = dragNode.key;
    const dropKey = dropNode.key;

    // 查找节点位置
    const dragIndex = data.findIndex(item => item.key === dragKey);
    const dropIndex = data.findIndex(item => item.key === dropKey);

    // 移动元素
    const removed = data.splice(dragIndex, 1);
    data.splice(dropIndex + (dropPosition === -1 ? 0 : 1), 0, ...removed);

    setRightData(data);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: 24, padding: 24 }}>
        <div style={{ width: 300 }}>
          <Tree
            treeData={sourceData}
            titleRender={(node) => <DraggableNode node={node} />}
            defaultExpandAll
            selectable={false}
          />
        </div>

        <div style={{ width: 300 }}>
          <RightContainer
            data={rightData}
            onDrop={handleDrop}
            onReorder={handleReorder}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;