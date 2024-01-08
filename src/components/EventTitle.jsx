import PropTypes from 'prop-types';

const EventTitle = ({ title }) =>  {

    return (
        <div className='w-full flex justify-center'>
            <h2 className="w-fit text-3xl sm:text-4xl font-bold my-6 py-2 sm:py-5 px-6 mx-6 md:mx-6   text-navbar-button text-center bg-navbar-button bg-opacity-10 rounded-2xl border border-navbar-button border-opacity-30">{title}</h2>
        </div>
    );
}

EventTitle.propTypes = {
    title: PropTypes.string,
};

export default EventTitle;