
import   '@google/model-viewer';
import  { ModelViewerElement } from '@google/model-viewer';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': Partial<ModelViewerElement>;
        }
    }
}


const BottomDrawer=()=>{
    return (
        
        <div  className="DrawerContainer">
            <model-viewer alt="qdqsd" src="https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb" ar    
            shadow-intensity="1" camera-controls touch-action="pan-y">

            </model-viewer>
            {/* https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb */}
        </div>
    )

}

 export default BottomDrawer ; 