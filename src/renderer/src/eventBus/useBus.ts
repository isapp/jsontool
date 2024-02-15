import mitt from 'mitt'
import { CompositeModalEvent } from '../modals/modalEvents'

type Events = {
  showModal: CompositeModalEvent
  dismissModal: never
}

export const emitter = mitt<Events>()
const useBus = () => ({ bus: emitter })

export default useBus
