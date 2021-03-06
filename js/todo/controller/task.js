function taskController(rootElement) {

	taskView(rootElement, tasks, {
		onDone,
		onMove,
		onDelete
	});

	taskAddFromView(rootElement, {
		onSubmit
	});

	function onDone(task, status) {
		tasks.done(task, status);
		//console.log('tasks', tasks);
	}

	function onMove(task) {
		tasks.move(task);
	}

	function onDelete(task) {
		tasks.delete(task);
	}

	function onSubmit(text) {
		tasks.add(text);
	}

}