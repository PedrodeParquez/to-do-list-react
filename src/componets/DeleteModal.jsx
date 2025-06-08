import { useAppContext } from "../contexts/Context";
import { useRef, useEffect } from 'react';
import { deleteTaskFromLocalStorage } from "../data/localStorage";

export default function DeleteModal() {
    const { delModal, openTask, setOpenTask, currTask, currOperation, setCurrOperation, setListTasks, setIndex, backdrop } = useAppContext();

    const buttonYes = useRef(null);
    const buttonNo = useRef(null)
    const delModalContent = useRef(null);

    useEffect(() => {
        if (currOperation == 'del') {   
            delModal.current.showModal();
            delModal.current.addEventListener('click', onClickBackdrop);

            backdrop.current.classList.add('backdrop-open');

            buttonYes.current.addEventListener(
                'click', 
                onClickYes,
                { once: true }
            );
            buttonNo.current.addEventListener(
                'click', 
                onClickNo,
                { once: true }
            );
            
            return () => {
                buttonYes.current.removeEventListener('click', onClickYes);
                buttonNo.current.removeEventListener('click', onClickNo);
    
                delModal.current.removeEventListener('click', onClickBackdrop);
        
                backdrop.current.classList.remove('backdrop-open');
            };
        }
    }, [currOperation])

    function onClickBackdrop(event) {
        if (event.target == delModal.current &&
            event.target != delModalContent.current) {
            delModal.current.close();
            
            setCurrOperation('');
        }
    }

    function onClickYes() {
        delModal.current.close();

        setIndex(prevIndex => { 
            let newIndex = prevIndex - 1;

            return newIndex;
        });
        
        if (openTask == currTask.id) {
            setOpenTask('');
        }

        setListTasks(deleteTaskFromLocalStorage(currTask.id));
        
        setCurrOperation('');
        console.log('YES');
    }

    function onClickNo() {
        delModal.current.close();

        setCurrOperation('');
    }

    return (
        <dialog className="modal-window" open="" ref={ delModal }>
            <div className="modal-content-container" ref={ delModalContent }>
                <div className="modal-decoration">
                </div>
                <div className="modal-text-container">
                    <p className="modal-text">Delete this task?</p>
                </div>
                <div className="modal-buttons-container">
                    <button className="text-buttons" ref={ buttonYes }>Да</button>
                    <button className="text-buttons re-bg" ref={ buttonNo }>Нет</button>
                </div>
            </div>
        </dialog>
    );
}
