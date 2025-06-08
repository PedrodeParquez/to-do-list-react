import FormTask from './componets/FormTask';
import "../src/styles/main.css";
import ListTask from './componets/ListTask';
import { useEffect } from 'react';
import { readLocalStorage } from './data/localStorage';
import DeleteModal from './componets/DeleteModal';
import { useAppContext } from './contexts/Context';
import EditModal from './componets/EditModal';
import ShareModal from './componets/ShareModal';
import Backdrop from './componets/Backdrop';

function App() {
  const { setIndex, setListTasks } = useAppContext();

  useEffect(() => {
    const localStorageElements = readLocalStorage();

    setIndex(localStorageElements.length);

    setListTasks(localStorageElements);
  }, []);

  return (
    <>
      <div className='fake-body'>
        <DeleteModal></DeleteModal>
        <EditModal></EditModal>
        <ShareModal></ShareModal>
        <Backdrop></Backdrop>

        <FormTask></FormTask>

        <ListTask></ListTask>
      </div>
    </>
  )
}

export default App