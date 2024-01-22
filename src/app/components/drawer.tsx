
import   '@google/model-viewer';
import  { ModelViewerElement } from '@google/model-viewer';
import { useDisplaytValues } from '../context/useContext';
import { elemntBg } from '../utils';

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
            <div onClick={() => closeDrawer()} className='close'>X</div>

            <div className='content' >
                <div className='elementImage' >
                    <img src={drawerData?.image.url} alt={drawerData?.image?.attribution} />

                </div>
                    <div className='elementData' >
                        <div className='elementBoxName' >
                        <div className="element" style={{ background: elemntBg({ section: "", paramesters: undefined }, drawerData) }} >


                            <div className="topBox">
                                <div className="atomicNumber">
                                    {drawerData.number}
                                </div>
                                <div className="atomicWeight">
                                    {drawerData.atomic_mass.toFixed(3)}
                                </div>
                            </div>

                            <div className="symbol">
                                {drawerData.symbol}
                            </div>

                            <div className="name"  >
                                {drawerData.name}
                            </div>
                        

                        </div>
                            <div className='elementName' >
                                {drawerData?.name}
                            </div>
                      
                            
                        </div>
                        <div className='elemntSummary' >
                         
                            <div className='summary' >
                                <p>
                                         {drawerData?.summary}
                                </p>
                           
                            </div>
                        </div>
                       
                   
              
                    </div>

                <div className='model3d' >
                    <model-viewer min-field-of-view="1deg" alt="qdqsd" src={drawerData?.bohr_model_3d}
                        shadow-intensity="0" rotation-per-second="60deg" camera-controls  >
                    </model-viewer>

                </div>



                    
                

            </div>
           
        
        
        </div>
    )

}

 export default BottomDrawer ; 