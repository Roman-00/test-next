import { defineStore } from "pinia";
import axios from "axios";

export const useEventsStore = defineStore('events', {
    state: () => {
        return {
            data: null,
        }
    },
    actions: {
        async fetch() {
            if (process.server) {
                const { data } = await axios.post('https://onsite.iteca.kz/exh-json/', {
                    apiKey: '4b4277bd1523915d0655ecc44992f2db',
                    lang: 'ru',
                    projectID: 0,
                    recCount: 5,
                    lastMonth: 0,
                });

                console.log('data1', data);

                return;
            }

            const { data } = await axios.post('https://onsite.iteca.kz/exh-json/', {
                apiKey: '4b4277bd1523915d0655ecc44992f2db',
                lang: 'ru',
                projectID: 0,
                recCount: 5,
                lastMonth: 0,
            });

            console.log('data2', data);
        }
    }
});
