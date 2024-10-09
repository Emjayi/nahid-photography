'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { Button } from './ui/button';
import { Loader, MessageSquare } from 'lucide-react'; // Importing icons from Lucide React
import Link from 'next/link';

export type FormData = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    date: string;
    package: string;
    location: string;
    referral: string;
    message: string;
};

const Contact: FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(data: FormData) {
        setIsLoading(true);
        try {
            await sendEmail(data);
            alert('Form submitted successfully!');
            reset(); // Reset the form fields
        } catch (error) {
            console.error(error);
            alert('There was an error submitting the form.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-2'>
                    <img src="/bg-mobile/2.jpg" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='col-span-3'>
                    <div className='mb-2'>
                        <label
                            htmlFor='firstName'
                            className=' block text-base font-medium text-black'
                        >
                            First Name
                        </label>
                        <input
                            type='text'
                            placeholder='First Name'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('firstName', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='lastName'
                            className='block text-base font-medium text-black'
                        >
                            Last Name
                        </label>
                        <input
                            type='text'
                            placeholder='Last Name'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('lastName', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='phoneNumber'
                            className='block text-base font-medium text-black'
                        >
                            Phone Number
                        </label>
                        <input
                            type='tel'
                            placeholder='Phone Number'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('phoneNumber', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='email'
                            className='block text-base font-medium text-black'
                        >
                            Email Address
                        </label>
                        <input
                            type='email'
                            placeholder='example@domain.com'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='date'
                            className='block text-base font-medium text-black'
                        >
                            Event Date
                        </label>
                        <input
                            type='date'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('date', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='package'
                            className='block text-base font-medium text-black'
                        >
                            What kind of package are you interested in?
                        </label>
                        <input
                            type='text'
                            placeholder='Package Type'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('package', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='location'
                            className='block text-base font-medium text-black'
                        >
                            Event Location
                        </label>
                        <input
                            type='text'
                            placeholder='Location'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('location', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='referral'
                            className='block text-base font-medium text-black'
                        >
                            How did you hear about me?
                        </label>
                        <input
                            type='text'
                            placeholder='Referral Source'
                            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('referral', { required: true })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='message'
                            className='block text-base font-medium text-black'
                        >
                            Any other questions or comments?
                        </label>
                        <textarea
                            rows={4}
                            placeholder='Type your message'
                            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                            {...register('message', { required: true })}
                        ></textarea>
                    </div>
                    <div className='flex items-center justify-stretch space-x-4'>
                        <Button type='submit' disabled={isLoading} className='flex rounded-sm items-center w-full'>
                            {isLoading ? (
                                <>
                                    <Loader className='animate-spin mr-2 h-5 w-5' />
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
            {/* Social Media Links */}
            <div className="mt-5 grid grid-cols-3 mb-8">
                <div className='flex flex-col gap-2 content-center text-center border-r-2 border-[#444]'>
                    <h2 className='font-bold'>Phone</h2>
                    <h3>+989154564684</h3>
                </div>
                <div className='flex flex-col gap-2 content-center text-center border-r-2 border-[#444]'>
                    <h2 className='font-bold'>Email</h2>
                    <h3>shahriarpour.nahid@gmail.com</h3>
                </div>
                <div className='flex flex-col gap-2 content-center text-center'>
                    <h2 className='font-bold'>Find Me On Instagram</h2>
                    <h3>nahidshahriarpourphotography</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;
