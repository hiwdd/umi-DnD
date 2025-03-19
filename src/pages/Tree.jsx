import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Tree, Popconfirm, Tooltip } from "antd";
import "./tree.less";
const { Search } = Input;
const { TreeNode } = Tree;

const createTreeNode = (data, type, usedSourceIds, handleDelete) => {
  return data.map((item) => {
    if (item.children) {
      return (
        <TreeNode
          title={
            <DraggableTreeNode
              node={item}
              type={type}
              usedSourceIds={usedSourceIds}
              handleDelete={handleDelete}
            />
          }
          key={item.code}
          dataRef={item}
          selectable={false}
          className="tree-node-item"
        >
          {createTreeNode(item.children, type, usedSourceIds)}
        </TreeNode>
      );
    }
    return (
      <TreeNode
        title={
          <DraggableTreeNode
            node={item}
            type={type}
            usedSourceIds={usedSourceIds}
            handleDelete={handleDelete}
          />
        }
        key={item.code}
        dataRef={item}
        selectable={false}
        className="tree-node-item"
      />
    );
  });
};

const DraggableTreeNode = ({ node, type, usedSourceIds, handleDelete }) => {
  return (
    <Draggable
      key={node.code}
      draggableId={`${type}-${node.code}`}
      index={node.code}
      isDragDisabled={type === "source" ? usedSourceIds?.has(node.code) : false}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={
            type === "source"
              ? usedSourceIds?.has(node.code)
                ? "tree-drag-disabled"
                : "tree-drag-enabled"
              : "tree-drag-delete"
          }
        >
          {node.name}
          {type === "target" && (
            <Popconfirm
              title="确认删除？"
              onConfirm={(e) => {
                e?.stopPropagation();
                handleDelete && handleDelete(node);
              }}
            >
              <Tooltip placement="bottom" title="删除">
                <CloseOutlined className="icon-close" />
              </Tooltip>
            </Popconfirm>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default ({ treeData, type, usedSourceIds, handleDelete }) => {
  return (
    <Tree className={type === "source" ? "" : "tree-node"}>
      {createTreeNode(treeData, type, usedSourceIds, handleDelete)}
    </Tree>
  );
};
