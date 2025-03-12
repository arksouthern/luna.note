import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

// @ts-ignore
self.MonacoEnvironment = {
	getWorker(_: any, label: string) {
		return new editorWorker()
	}
}

export {}