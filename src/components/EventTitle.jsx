import PropTypes from 'prop-types';

const EventTitle = ({ title }) =>  {

    return (
        <div className='w-full flex justify-center'>
            <h2 className="font-merriweather w-auto md:px-64 text-3xl sm:text-4xl font-bold my-6 py-2 sm:py-5 px-10 mx-6 md:mx-6   text-navbar-button text-center bg-title-body rounded-2xl border border-title-border">{title}</h2>
        </div>
    );
}

EventTitle.propTypes = {
    title: PropTypes.string,
};

export default EventTitle;