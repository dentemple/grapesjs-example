export default function panels() {
  return {
    defaults: [
      {
        id: 'layers',
        el: '.panel__right',
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: 'flex-basis'
        }
      },
      {
        id: 'panel-switcher',
        el: '.panel__switcher',
        buttons: [
          {
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false
          },
          {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false
          },
          {
            id: 'show-traits',
            active: true,
            label: 'Traits',
            command: 'show-traits',
            togglable: false
          }
        ]
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [
          {
            id: 'device-desktop',
            label: 'D',
            command: 'set-device-desktop',
            active: true,
            togglable: false
          },
          {
            id: 'device-mobile',
            label: 'M',
            command: 'set-device-mobile',
            togglable: false
          }
        ]
      }
    ]
  }
}
