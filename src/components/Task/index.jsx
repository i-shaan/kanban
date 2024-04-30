import { TimeOutline } from "react-ionicons";
import { TrashOutline } from "react-ionicons";

const Task = ({ task, provided, columns, setColumns, setSelectedColumn}) => {
    const { id, title, description, priority, deadline, tags } = task;
    const handleDeleteTask = (taskId) => {
        setColumns(prevColumns => {
            const newColumns = { ...prevColumns };
            
            const columnId = Object.keys(newColumns).find(columnId =>
                newColumns[columnId].items.some(item => item.id === taskId)
            );
            if (columnId) {
   
                newColumns[columnId].items = newColumns[columnId].items.filter(item => item.id !== taskId);
            }
            return newColumns;
        });
    };
    
    
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
        >
            <div className="flex justify-between">
                {/* Display tags at the beginning */}
                <div className="flex gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag.title}
                            className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
                            style={{ backgroundColor: tag.bg, color: tag.text }}
                        >
                            {tag.title}
                        </span>
                    ))}
                </div>
                {/* Display delete icon at the rightmost side */}
                <div>
                <TrashOutline
    color={"#666"}
    width="19px"
    height="19px"
    onClick={() => handleDeleteTask(id)}
/>
                </div>
            </div>
            <div className="w-full flex items-start flex-col gap-0">
                <span className="text-[15.5px] font-medium text-[#555]">{title}</span>
                <span className="text-[13.5px] text-gray-500">{description}</span>
            </div>
            <div className="w-full border border-"></div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <TimeOutline
                        color={"#666"}
                        width="19px"
                        height="19px"
                    />
                    <span className="text-[13px] text-gray-700">{deadline} mins</span>
                </div>
                <div
                    className={`w-[60px] rounded-full h-[5px] ${
                        priority === "high"
                            ? "bg-red-500"
                            : priority === "medium"
                                ? "bg-orange-500"
                                : "bg-blue-500"
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default Task;
