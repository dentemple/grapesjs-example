import './common/base.css'

/* styles */
import 'grapesjs/dist/css/grapes.min.css'
import './index.css'

/* core libraries */
import grapesjs from 'grapesjs'

/* core functionality */
import deviceManager from './features/deviceManager'
import panels from './features/panels'
import storageManager from './features/storageManager'
import styleManager from './features/styleManager'

/* utils */
import './common/polyfills'

const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: '300px',
  width: 'auto',
  storageManager: storageManager(),
  layerManager: {
    appendTo: '.layers-container'
  },
  deviceManager: deviceManager(),
  panels: panels(),
  selectorManager: {
    appendTo: '.styles-container'
  },
  styleManager: styleManager()
})

editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top'
})

editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true, // active by default
      className: 'btn-toggle-borders',
      label: '<u>B</u>',
      command: 'sw-visibility' // Built-in command
    },
    {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template' // For grouping context of buttons from the same panel
    },
    {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(
            `<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`
          )
          .open()
      }
    }
  ]
})

editor.on('run:export-template:before', opts => {
  console.log('Before the command run')
  if (0 /* some condition */) {
    opts.abort = 1
  }
})
editor.on('run:export-template', () => console.log('After the command run'))
editor.on('abort:export-template', () => console.log('Command aborted'))

editor.Commands.add('show-layers', {
  getRowEl(editor) {
    return editor.getContainer().closest('.editor-row')
  },
  getLayersEl(row) {
    return row.querySelector('.layers-container')
  },

  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor))
    lmEl.style.display = ''
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor))
    lmEl.style.display = 'none'
  }
})
editor.Commands.add('show-styles', {
  getRowEl(editor) {
    return editor.getContainer().closest('.editor-row')
  },
  getStyleEl(row) {
    return row.querySelector('.styles-container')
  },

  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor))
    smEl.style.display = ''
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor))
    smEl.style.display = 'none'
  }
})

// Commands
editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
})
editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
})

editor.on('change:device', () => console.log('Current device: ', editor.getDevice()))
