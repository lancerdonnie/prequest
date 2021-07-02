import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { defaultTabBinding } from '@codemirror/commands';
import { EditorView, keymap } from '@codemirror/view';
import { json } from '@codemirror/lang-json';

export default function setupEditors() {
  const basicExtensions = [
    basicSetup,
    keymap.of([defaultTabBinding]),
    json(),
    EditorState.tabSize.of(2),
  ];

  const requestEditor = (ref: Element) =>
    new EditorView({
      state: EditorState.create({
        doc: '{\n\t\n}',
        extensions: basicExtensions,
      }),
      parent: ref,
    });

  const responseEditor = (ref: Element) =>
    new EditorView({
      state: EditorState.create({
        doc: '{}',
        extensions: [...basicExtensions, EditorView.editable.of(false)],
      }),
      parent: ref,
    });

  function updateResponseEditor(responseEditor, value) {
    responseEditor.dispatch({
      changes: {
        from: 0,
        to: responseEditor.state.doc.length,
        insert: JSON.stringify(value, null, 2),
      },
    });
  }

  return { requestEditor, responseEditor, updateResponseEditor };
}
