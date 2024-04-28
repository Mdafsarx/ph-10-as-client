import axios from "axios";

const AddCraftSection = () => {

    const handleAdd = (e)=>{
        e.preventDefault();
        const imgUrl=e.target.img_url.value ;
        const cost =e.target.cost.value ;
        const name=e.target.name.value ;
        const Craft={imgUrl,cost,name};
        axios.post('https://ph-10-as-server.vercel.app/craftSection',Craft).
        then(data=>{
            console.log(data.data)
            if(data.data.insertedId){
                alert()
                e.target.reset()
            }
        })
    }

    return (
        <div>


            <form onSubmit={handleAdd}>

                <input type="ur" name="img_url" id="" placeholder="url" /><br />
                <input type="text" name="cost" placeholder="cost" /><br />
                <input type="text" name="name" placeholder="name" />

                <input className="btn" type="submit" value="add" />

            </form>



        </div>
    );
};

export default AddCraftSection;