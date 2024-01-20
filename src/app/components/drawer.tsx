
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
                    {drawerData?.name}
                </div>
                <div onClick={() => closeDrawer()} className='close'>X</div>

            </div>
         
            <div className='content' >
                    <div className='model3d' >
                    <model-viewer min-field-of-view="1deg" alt="qdqsd" src={drawerData?.bohr_model_3d} 
                        shadow-intensity="0" rotation-per-second="60deg"  camera-controls  >
                        </model-viewer>

                    </div>
                    <div className='elementData' >
                        data
                    </div>
                    <div className='elementImage' >
                        <img src={drawerData?.image.url} alt={drawerData?.image?.attribution} />

                    </div>
                

            </div>
           
        
        
        </div>
    )

}

 export default BottomDrawer ; 