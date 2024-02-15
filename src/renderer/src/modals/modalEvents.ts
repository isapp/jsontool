import useBus from '../eventBus/useBus'

interface BaseModalEvent {
  content: string
}

interface Confirmation extends BaseModalEvent {
  type: 'confirm'
}

interface CTA extends BaseModalEvent {
  type: 'cta'
  action: URL
  actionLabel: string
}

export type CompositeModalEvent = Confirmation | CTA

type ModalEvent<T> = Omit<T, 'type'>

const useModalEvents = () => {
  const { bus } = useBus()
  const confirmationModal = (event: ModalEvent<Confirmation>) => {
    bus.emit('showModal', {
      ...event,
      type: 'confirm'
    })
  }

  const ctaModal = (event: ModalEvent<CTA>) => {
    bus.emit('showModal', {
      ...event,
      type: 'cta'
    })
  }

  const dismissModal = () => {
    bus.emit('dismissModal' as never)
  }

  return {
    confirmationModal,
    ctaModal,
    dismissModal
  }
}

export default useModalEvents
