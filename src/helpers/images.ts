/**
 * Хелпер который помогает получить доступ к изображению
 *
 * @param {string} id - id события
 */
export const getImages = (id) => {
    return {
        bw:    `/images/events/${id}.jpg`,
        hover: `/images/events/${id}-hover.jpg`
    }
};
