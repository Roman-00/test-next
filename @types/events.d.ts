type EventsItemType = {
    projectID: string,
    project: string,
    type: string,
    title: string,
    description: string,
    logo: string,
    logomini: string,
    logomax: string,
    beginDate: string,
    beginTime: string,
    endDate: string,
    endTime: string,
    address: string,
    location: string,
    latitude: string,
    longitude: string,
    programme: string,
    industry: string
};

type EventsResponseStatusType = {
    message: string,
    messageId: number
};

type EventsResponseType = {
    confList: EventsItemType[],
    responceStatus: EventsResponseStatusType
};
