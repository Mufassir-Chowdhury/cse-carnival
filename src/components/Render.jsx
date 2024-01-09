import { Details, QuickDetails, TitleWithList } from "./Details";


export const renderShortDescriptions = (shortDescription) => (
    <div className='flex flex-col gap-2'>
        {shortDescription.map((description, index) => (
            <QuickDetails
                key={index}
                className={getShortDescriptionClass(index)}
                description={description}
            />
        ))}
    </div>
);

export const renderLongDescriptions = (longDescription) => (
    <>
        {longDescription.map((item) => (
            <Details key={item.title} description={item} />
        ))}
    </>
);

export const renderTitleWithList = (title, items) => (
    <TitleWithList title={title} items={items} />
);

export const getShortDescriptionClass = (index) => {
    return index % 3 === 0
        ? "bg-amber-600 border-orange-600"
        : index % 3 === 1
            ? "bg-slate-500 border-slate-500"
            : "bg-amber-100 border-amber-100";
};