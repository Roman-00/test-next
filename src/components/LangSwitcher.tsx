import FC from 'react';
import { useRouter } from "next/router";

export const LangSwitcher: FC = () => {
    const router = useRouter();

    const handleChange = (event) => {
        const locale = event.target.value;

        router.push(router.pathname, router.asPath, { locale });
    }

    return (
        <select
            defaultValue={router.locale}
            onChange={handleChange}
        >
            <option value="ru">
                Русский
            </option>
            <option value="en">
                English
            </option>
        </select>
    )

}
