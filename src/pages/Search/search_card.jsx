import React from 'react'
import './search_card.css'


function search_card() {
    const search_card =[
     {id:1,image:"/search/card-image1.avif",name:"Women's Tree Runner Go - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$150"},
{id:2,image:"/search/card-image2.avif",name:"Men's Tree Dasher 2 - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$145"},
{id:3,image:"/search/card-image3.avif",name:"Unisex Merino Blend Hoodie",selling:"True Black",price:"$98"},
{id:4,image:"/search/card-image4.avif",name:"Men's Merino Blend Sweatshirt",selling:"True Black",price:"$90"},
{id:5,image:"/search/card-image5.avif",name:"Men's Merino Blend Sweatpant",selling:"True Black",price:"$95"},
{id:6,image:"/search/card-image6.avif",name:"Women's Tree Piper",selling:"Rustic Brown (Stony Cream Sole)",price:"$89"},
{id:7,image:"/search/card-image7.avif",name:"Women's Tree Runner Go - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$150"},
{id:8,image:"/search/card-image8.avif",name:"Men's Tree Dasher 2 - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$145"},
{id:9,image:"/search/card-image9.avif",name:"Unisex Merino Blend Hoodie",selling:"True Black",price:"$98"},
{id:10,image:"/search/card-image10.avif",name:"Men's Merino Blend Sweatshirt",selling:"True Black",price:"$90"},
{id:11,image:"/search/card-image11.avif",name:"Men's Merino Blend Sweatpant",selling:"True Black",price:"$95"},
{id:12,image:"/search/card-image12.avif",name:"Women's Tree Piper",selling:"Rustic Brown (Stony Cream Sole)",price:"$89"},
{id:13,image:"/search/card-image13.avif",name:"Women's Tree Runner Go - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$150"},
{id:14,image:"/search/card-image14.avif",name:"Men's Tree Dasher 2 - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$145"},
{id:15,image:"/search/card-image15.avif",name:"Unisex Merino Blend Hoodie",selling:"True Black",price:"$98"},
{id:16,image:"/search/card-image16.avif",name:"Men's Merino Blend Sweatshirt",selling:"True Black",price:"$90"},
{id:17,image:"/search/card-image17.avif",name:"Men's Merino Blend Sweatpant",selling:"True Black",price:"$95"},
{id:18,image:"/search/card-image18.avif",name:"Women's Tree Piper",selling:"Rustic Brown (Stony Cream Sole)",price:"$89"},
{id:19,image:"/search/card-image19.avif",name:"Women's Tree Runner Go - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$150"},
{id:20,image:"/search/card-image20.avif",name:"Men's Tree Dasher 2 - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$145"},
{id:21,image:"/search/card-image21.avif",name:"Unisex Merino Blend Hoodie",selling:"True Black",price:"$98"},
{id:22,image:"/search/card-image22.avif",name:"Men's Merino Blend Sweatshirt",selling:"True Black",price:"$90"},
{id:23,image:"/search/card-image23.avif",name:"Men's Merino Blend Sweatpant",selling:"True Black",price:"$95"},
{id:24,image:"/search/card-image24.avif",name:"Women's Tree Piper",selling:"Rustic Brown (Stony Cream Sole)",price:"$89"},
{id:25,image:"/search/card-image25.avif",name:"Women's Tree Runner Go - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$150"},
{id:26,image:"/search/card-image26.avif",name:"Men's Tree Dasher 2 - Utility",selling:"Blizzard/Hazy Pine (Natural White Sole)",price:"$145"},
{id:27,image:"/search/card-image27.avif",name:"Unisex Merino Blend Hoodie",selling:"True Black",price:"$98"},
{id:28,image:"/search/card-image28.avif",name:"Men's Merino Blend Sweatshirt",selling:"True Black",price:"$90"},
{id:29,image:"/search/card-image29.avif",name:"Men's Merino Blend Sweatpant",selling:"True Black",price:"$95"},
{id:30,image:"/search/card-image30.avif",name:"Women's Tree Piper",selling:"Rustic Brown (Stony Cream Sole)",price:"$89"}


    ]
  return (
    <>
      <div className="search-card-main">
      {
         search_card.map((serch)=>(
            <div key={serch.id} className="serch-data">
              <div className="hover">
                  <div className="search_img">
                    <img src={serch.image} alt="" className='serach-pic' />
                    <h3>{serch.name}</h3>
                    <p><b>{serch.selling}</b></p>
                    <h5>${serch.price}</h5>
                </div>
              </div>
            </div>
         ))
      }
      </div>
    </>
  )
}

export default search_card

// Unisex Merino Blend Hoodie, Men's Merino Blend Sweatshirt, Men's Merino Blend Sweatpant, Women's Tree Piper, Men's Runner Chelsea Protect, Women's Runner Chelsea Protect 