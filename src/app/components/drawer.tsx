
import   '@google/model-viewer';
import  { ModelViewerElement } from '@google/model-viewer';
import { useDisplaytValues } from '../context/useContext';
import { elemntBg } from '../utils';
import PerfectScrollbar from 'react-perfect-scrollbar'
import "react-perfect-scrollbar/dist/css/styles.css";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': Partial<ModelViewerElement>;
        }
    }
}


const BottomDrawer=()=>{
    const { closeDrawer ,drawerData } = useDisplaytValues();
    const data =[
        {
            title: "Category",
            value: "category",
        }, 
        {
            title: "Melting point",
            value: "melt",
        },
        {
            title: "Atomic number",
            value: "number",
        }, {
        title:"Group" , 
            value:"group",
    }, 
        {
            title: "Boiling point",
            value: "boil",
        }, 
        {
            title: "Electron configuration",
            value: "electron_configuration_semantic",
        },
        {
            title: "Period",
            value: "period",
        },  {
            title: "State at 20°C",
            value: "phase",
        },
       {
            title: "Atomic mass",
            value: "atomic_mass",
        },
        {
            title: "Block",
            value: "block",
        }, {
            title: "Density",
            value: "density",
        }]
    return (
        
        <div  className="drawerContainer">
            <div onClick={() => closeDrawer()} className='close'>X</div>

            <div className='content' >
                <div className='elementImage' >
                    <img src={drawerData?.image.url} alt={drawerData?.image?.attribution} />
                    <div className='title'>
                        {drawerData?.image.title} 
                    </div>

                </div>    
                    <div className='elementData' >     
                        <PerfectScrollbar  >
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
                                    {drawerData?.name}
                                </div>
                            

                            </div>
                                <div className='elementName' >
                                    {drawerData?.name}
                                </div>
                        
                                
                            </div>
                            <div className='elementSummary' >
                            
                                <div className='summary' >
                                    <p>
                                            {drawerData?.summary}
                                    </p>
                                    <div className='disData' > 
                                    {data.map((value, index )=>{
                                        return (
                                            <div key={index} className='single'>
                                                {value.title}:<strong>{drawerData?.[value.value]}</strong>

                                            </div>
                                        )
                                    })
                                    }

                                    <div   className='single' >
                                        
                                        Source<strong><a href={drawerData?.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></strong>

                                    </div>
                                
                                    </div>
                                </div>
                            </div>
                       
                        </PerfectScrollbar>
              
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