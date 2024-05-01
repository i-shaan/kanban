import { uid  as uuidv4 } from "uid";




export const Board = {
	
	pending: {
		name: "Pending",
		items: [
			{
				id: uuidv4(),
				title: "Web Projects",
				description: "Frontend",
				priority: "high",
				deadline: 50,
				tags: [
					{ title: "TAG 1",  },
					{ title: "TAG 2",  },
				],
			},
			{
				id: uuidv4(),
				title: "AWeb Projects",
				description: "Frontend",
				priority: "low",
				deadline: 50,
				image:"" ,
				alt: "task image",
				tags: [
					{ title: "TAG 1",  },
					{ title: "TAG 2",  },
				],
			},
		],
	},
	todo: {
		name: "To Do",
		items: [
			{
				id: uuidv4(),
				title: "AWeb Projects",
				description: "Frontend",
				priority: "medium",
				deadline: 50,
				image: "",
				alt: "task image",
				tags: [
					{ title: "TAG 1",  },
					{ title: "TAG 2",  },
				],
			},
		],
	},
	doing: {
		name: "Doing",
		items: [
			{
				id: uuidv4(),
				title: "AWeb Projects",
				description: "Frontend",
				priority: "low",
				deadline: 50,
				tags: [
					{ title: "TAG 1",  },
					{ title: "TAG 2",  },
				],
			},
			{
				id: uuidv4(),
				title: "Web Projects",
				description: "Frontend",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "TAG 1",  },
					{ title: "TAG 2",  },
				],
			},
		],
	},
	done: {
		name: "Done",
		items: [
			{
				id: uuidv4(),
				title: "AWeb Projects",
				description: "Frontend",
				priority: "high",
				deadline: 50,
				image: "",
				alt: "task image",
				tags: [
					{ title: "TAG 1",  },
					{ title: "TAG 2",  },
				],
			},
		],
	},
};