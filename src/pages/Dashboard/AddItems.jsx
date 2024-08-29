import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
console.log(image_hosting_key, image_hosting_api)
const AddItems = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        //image upload it imgbb and then get and url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            //now send the menu item to the db
            console.log(res.data)
            const menuItem = {
                name: data.name,
                recipe: data.recipe_details,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
            }
            //
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                //show success 
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div className='md:p-12 p-6'>
            <div>
                <SectionTitle
                    heading={"Add an item"}
                    subHeading={"What's new"}
                />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                            {...register("name")}
                            type="text" placeholder="Recipe Name"
                            className="input input-bordered w-full" />
                    </div>
                    <div className='md:flex items-start gap-4 justify-between'>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name</span>
                            </div>
                            <select
                                {...register("category")}
                                className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
                                <option defaultValue="salad" value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                {...register("price")}
                                type="text" placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control py-5">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            {...register("recipe_details")}
                            className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Pick a file</span>
                        </div>
                        <input
                            {...register("image")}
                            type="file" className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <button className='btn mt-4'>
                        <input type="submit" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;