import React, { useState, useEffect } from 'react';
import { IUPCLeft, IUPCRight } from '../data/vector';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import EventTitle from '../components/EventTitle';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import SponsoredBy from '../components/SponsoredBy';
import { organizers, poweredby } from '../data/data';
import NotFound from '../components/NotFound';

const VectorGraphics = () => {
    return (
        <div className='z-0 relative'>
            <IUPCLeft />
            <IUPCRight />
        </div>
    )
};

const Status = (props) => {
    const { id } = useParams();
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        // Make API call when the component mounts
        const fetchPaymentData = async () => {
            try {
                const requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                };

                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/payment/${id}`, requestOptions);
                const result = await response.json();

                if (result && result.data && result.data.length > 0) {
                    setPaymentData(result.data[0]);
                }
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchPaymentData();
    }, [id]);

    const getParticipantInfo = () => {
        const allParticipants = [];

        if (paymentData && paymentData.teamInfo) {
            const teamInfo = paymentData.teamInfo;


            teamInfo.name && allParticipants.push({ title: 'Name', name: teamInfo.name });
            teamInfo.coach && allParticipants.push({ title: 'Coach', name: teamInfo.coach.name });
            teamInfo.teamLeader && allParticipants.push({ title: 'Team Leader', name: teamInfo.teamLeader.name });
            teamInfo.participant1 && allParticipants.push({ title: 'Participant 1', name: teamInfo.participant1.name });
            teamInfo.participant2 && allParticipants.push({ title: 'Participant 2', name: teamInfo.participant2.name });
            teamInfo.participant3 && allParticipants.push({ title: 'Participant 3', name: teamInfo.participant3.name });
        }

        return allParticipants;
    };

    const handleProceedToPay = async (e) => {
        e.preventDefault();
        // Add logic to handle the action when the "Proceed to Pay" button is clicked
        // Make fetch request 
        const response = await fetch(`https://csecarnival.sust.edu.bd/api/v1/payment/getCheckoutURL/${id}`);

        // Get checkout URL from response
        const checkoutURL = await response.json();
        console.log(checkoutURL.url);

        // Redirect browser to checkout URL 
        window.location.href = checkoutURL.url;
        console.log('Proceed to Pay button clicked');
    };

    const getCompetitionTitle = (competition) => {
        switch (competition) {
            case 'iUPC':
                return 'IUPC';
            case 'hackathon':
                return 'Hackathon';
            case 'dLSprint':
                return 'DL Enigma 1.0';
            case 'codingGame':
                return 'Code Battle';
            default:
                return competition;
        }
    };

    return (
        <div className='flex flex-col items-center justify-center sm:px-12'>
            {paymentData ? (
                <div>
                    {/* <VectorGraphics /> */}
                    <div className='text-navbar z-10 relative px-4 mt-24 pb-0 xl:px-28'>
                        <EventTitle title={getCompetitionTitle(paymentData.competition)} />
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            <div className='col-span-2'>

                                <div className="px-4 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                                </div>
                                <div className="mt-6 border-t border-gray-200">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Team Name</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-1 sm:col-span-2 sm:mt-0">{paymentData.teamInfo.teamName}</dd>
                                        </div>
                                        {getParticipantInfo().map((participant, index) => (
                                            <div key={index} className="px-4 py-4 grid grid-cols-2 sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">{participant.title}</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 col-span-1 sm:col-span-2 sm:mt-0">{participant.name}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className='m-8 p-8 border border-yellow-300'>

                                <div className="px-4 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Payment Status</h3>
                                    <p className={`mt-1 max-w-2xl text-sm leading-6 ${paymentData.isPaid ? "text-green-500": "text-red-500"}`}>{paymentData.isPaid ? '' : 'Not'} paid</p>
                                </div>
                                <div className="mt-6 border-t border-gray-200">
                                    <dl className="divide-y divide-gray-200">
                                        <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Total</dt>
                                            <dd className="mt-1 text-sm leading-6 text-end text-gray-700 sm:col-span-2 sm:mt-0">{paymentData.amount}৳</dd>
                                        </div>
                                        <div className='py-10 w-full flex justify-center font-lato'>
                                            <button
                                                className="w-full  bg-yellow-500 text-white px-4 py-1 "
                                                onClick={(e)=>handleProceedToPay(e)}
                                                type='button'
                                                disabled={paymentData.isPaid}
                                            >
                                                {paymentData.isPaid ? 'Paid' : 'Pay'}
                                            </button>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>

                            {/* <p>Is Paid: {paymentData.isPaid ? 'Yes' : 'No'}</p> */}
                        </div>
                        

                        {/* <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} /> */}
                        <div className="lg:mx-0 z-10 relative pb-0">
                            <SponsoredBy title={"Powered By"} list={""} sponsors={poweredby} />
                            <SponsoredBy title={"Organized By"} list={"list"} sponsors={organizers} />
                        </div>
                    </div>
                </div>

            ) : (
                <div className="text-center py-28 h-screen flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-red-500">Invalid Payment Link</h1>
                    <p className="text-lg mt-4">Please check your email for the correct payment link.</p>
                </div>
            )}
        </div>
    );
};

export default Status;
