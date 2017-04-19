export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const makeModalAction = type => (modalType, modalProps) => ({
    type,
    modalType,
    modalProps
});

export const showModal = (modalType, modalProps) =>
    makeModalAction(SHOW_MODAL)(modalType, modalProps);
export const hideModal = (modalType, modalProps) =>
    makeModalAction(HIDE_MODAL)(modalType, modalProps);
