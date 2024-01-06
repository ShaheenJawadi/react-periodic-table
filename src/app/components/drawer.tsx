
import   '@google/model-viewer';
import  { ModelViewerElement } from '@google/model-viewer';
import { useDisplaytValues } from '../context/useContext';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': Partial<ModelViewerElement>;
        }
    }
}


const BottomDrawer=()=>{
    const { closeDrawer ,drawerData } = useDisplaytValues()
    return (
        
        <div  className="drawerContainer">
            <div className='drawerHeader' >
                <div className='name' >
                    name
                </div>
                <div onClick={() => closeDrawer()} className='close'>X</div>

            </div>
         
         <div className='content' >

         </div>
            {/* <model-viewer alt="qdqsd" src="https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb" ar    
            shadow-intensity="1" camera-controls touch-action="pan-y">

            </model-viewer> */}
        
        
        </div>
    )

}

 export default BottomDrawer ; 