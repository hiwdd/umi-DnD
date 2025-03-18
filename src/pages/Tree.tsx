import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { Input, Tree } from 'antd';
const { Search } = Input;
const { TreeNode } = Tree;

const createTreeNode = (data, type) => {
    return data.map((item) => {
        if (item.children) {
            return (
                <TreeNode title={item.title} key={item.key} dataRef={item} selectable={false}>
                {createTreeNode(item.children, type)}
                </TreeNode>
            );
        }
        return <TreeNode {...item} selectable={false} />;
    });
}
 
const DraggableTreeNode = (sourceData) => {
  return (
    <Draggable key={node.id} draggableId={node.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {node.title}
          {node.children && (
            <div style={{ marginLeft: 20 }}>
              {node.children.map((child, childIndex) => (
                <TreeNode key={child.id} node={child} index={childIndex} parentId={node.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};
 
const Tree = ({ treeData }) => {
  return (
    <Droppable droppableId="tree">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {treeData.map((item, index) => (
            <DraggableTreeNode key={item.id} node={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};