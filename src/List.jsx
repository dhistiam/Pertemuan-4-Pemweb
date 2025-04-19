import React,{Component} from "react";
import Images from "./Images";

class List extends Component {
    render(){
        return(
            <div>
                <ol>
                    <li>1 <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/></li>
                    <li>2 <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" /></li>
                    <li>3 <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/></li>
                    <li>4 <Images linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/></li>
                </ol>
            </div>
        )
    }}
export default List;