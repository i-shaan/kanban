import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Board } from "../../data/board";

import { onDragEnd } from "../../helper/onDragEnd";
import { AddOutline } from "react-ionicons";
import AddModal from "../../components/Modal";
import Task from "../../components/Task";
const Home = () => {
	const [columns, setColumns] = useState(Board);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedColumn, setSelectedColumn] = useState("");

	const openModal = (columnId) => {
		setSelectedColumn(columnId);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const handleAddTask = (taskData) => {
		const newBoard = { ...columns };
		newBoard[selectedColumn].items.push(taskData);
	};

	return (
		<>
		<div className="mt-[60px] ml-[250px] z-0" style={{ zIndex: 0 }}>
			<DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
				<div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
					{Object.entries(columns).map(([columnId, column]) => (
						<div
							className="w-full flex flex-col gap-0"
							key={columnId}
						>
							<Droppable
								droppableId={columnId}
								key={columnId}
							>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
									>
										<div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
											{column.name} {column.items.length}
										</div>
										{column.items.map((task, index) => (
											<Draggable
												key={task.id.toString()}
												draggableId={task.id.toString()}
												index={index}
											>
												{(provided) => (
													<>
														<Task setSelectedColumn={setSelectedColumn}
														setColumns={setColumns}
															provided={provided}
															task={task}
														/>
													</>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
							<div
								onClick={() => openModal(columnId)}
								className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
							>
								<AddOutline color={"#555"} />
								Add Task
							</div>
						</div>
					))}
				</div>
			</DragDropContext>

			<AddModal
				isOpen={modalOpen}
				onClose={closeModal}
				setOpen={setModalOpen}
				handleAddTask={handleAddTask}
			/>
			</div>
		</>
	);
};

export default Home;