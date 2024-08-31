import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { name, category, price, recipe, image } = useLoaderData()
    console.log(name, category, price, recipe, image)


    const onSubmit = async (data) => {
   
    }

    return (
        <div>
            <h2 className='text-3xl'>Update Item</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                            defaultValue={name}
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

export default UpdateItem;