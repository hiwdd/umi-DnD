import { DroppableProvided, DraggableProvided } from 'react-beautiful-dnd';

declare module 'react-beautiful-dnd' {
  export interface DraggableProps {
    children: (
      provided: DraggableProvided, 
      snapshot: DraggableStateSnapshot
    ) => React.ReactElement;
  }
  
  export interface DroppableProps {
    children: (
      provided: DroppableProvided, 
      snapshot: DroppableStateSnapshot
    ) => React.ReactElement;
  }
}