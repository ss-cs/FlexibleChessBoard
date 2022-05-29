
import Cards from "./card";
import './chess.css';

const Chess = (props) =>{

    let obj = [];
    let appStyle = "";
    
    const defineGrid = (number) =>{
        let myNum = parseInt(number);
        
        let flag = true;
        for(let i = 1; i <=myNum ; i++){
            appStyle += "auto "
            for(let j = 1;j <= myNum ; j++){
                if(flag){
                    obj.push(
                        <Cards value = {''} color = {'black'} />
                    )
                    flag= !flag;
                }
                else{
                    obj.push(
                        <Cards value = {''} color={'white'} />
                    );
                    flag= !flag;
                }
            }
            if(myNum % 2 === 0){
                flag = !flag
            }
        }
        
    }
    defineGrid(props.value);
    return (
        <div>
            <div className = "chessApp" >
                <div className="wrapper" style={{display:'grid', gridTemplateColumns: appStyle , gridTemplateRows: appStyle   }}>
                    
                    {obj}
                </div>
            </div>
        </div>
    )
}

export default Chess;