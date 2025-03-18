import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

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
  const [sourceItems] = useState(initialSourceMenus);
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
        uid: `${sourceItem.id}-${Date.now()}`
      };
      
      setTargetItems(prev => {
        const newTarget = Array.from(prev);
        newTarget.splice(destination.index, 0, newItem);
        return newTarget;
      });

      // 标记该源项目已被使用
      setUsedSourceIds(prev => new Set(prev).add(sourceItem.id));
    }
  };

  // 删除目标项
  const handleDelete = (uid) => {
    setTargetItems(prev => prev.filter(item => item.uid !== uid));
  };

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
              {sourceItems.map((item, index) => (
                <Draggable 
                  key={item.id} 
                  draggableId={item.id} 
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: '8px',
                        margin: '4px 0',
                        background: usedSourceIds.has(item.id) ? '#f8f9fa' : '#f0f0f0',
                        border: `1px solid ${usedSourceIds.has(item.id) ? '#dee2e6' : '#ccc'}`,
                        color: usedSourceIds.has(item.id) ? '#adb5bd' : 'inherit',
                        ...provided.draggableProps.style,
                        cursor: 'grab',
                      }}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
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
              {targetItems.map((item, index) => (
                <Draggable key={item.uid} draggableId={item.uid} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        padding: '8px',
                        margin: '4px 0',
                        background: '#e3f2fd',
                        border: '1px solid #90caf9',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        ...provided.draggableProps.style
                      }}
                    >
                      <div {...provided.dragHandleProps}>
                        {item.text}
                      </div>
                      <button 
                        onClick={() => handleDelete(item.uid)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ff4444',
                          cursor: 'pointer',
                          fontSize: '1.2em'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}