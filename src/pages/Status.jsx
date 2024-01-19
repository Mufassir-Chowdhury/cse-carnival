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

    const handleProceedToPay = () => {
        // Add logic to handle the action when the "Proceed to Pay" button is clicked
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
        <div className='flex flex-col items-center justify-center'>
            {paymentData ? (
                <div>
                    {/* <VectorGraphics /> */}
                    <div className='text-navbar z-10 relative px-4 mt-24 pb-0 lg:px-28'>
                        <EventTitle title={getCompetitionTitle(paymentData.competition)} />
                        <div className='text-center'>

                            <h3>Team Name: {paymentData.teamInfo.teamName}</h3>
                            {getParticipantInfo().map((participant, index) => (
                                <p key={index}>

                                    {participant.title}: {participant.name}
                                </p>
                            ))}


                            <p>Registration Fee : {paymentData.amount} BDT</p>

                            {/* <p>Is Paid: {paymentData.isPaid ? 'Yes' : 'No'}</p> */}
                        </div>
                        <div className='py-10 w-full flex justify-center font-lato'>
                            {paymentData.isPaid ? (
                                <PrimaryButton text="Paid" disabled />
                            ) : (
                                <PrimaryButton text="Proceed to Pay" onClick={handleProceedToPay} />
                            )}
                        </div>

                        {/* <SponsoredBy title={"Sponsored By"} list={""} sponsors={events[id].sponsors} /> */}
                        <div className="lg:mx-0 z-10 relative pb-0">
                            <SponsoredBy title={"Powered By"} list={""} sponsors={poweredby} />
                            <SponsoredBy title={"Organized By"} list={"list"} sponsors={organizers} />
                        </div>
                    </div>
                </div>

            ) : (
                <NotFound/>
            )}
        </div>
    );
};

export default Status;
