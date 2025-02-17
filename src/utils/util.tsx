import MilleniaCreditIcon from "../assets/icons/millenia-credit.jpg";
import HdfcDebitIcon from "../assets/icons/hdfc-debit.png";
import IciciAmazonPayIcon from "../assets/icons/icici-amazon-pay.png";
import YesBankAceIcon from "../assets/icons/yes-bank-ace.png";
import YesBankDebitIcon from "../assets/icons/yes-bank-debit.webp";
import BoiIcon from "../assets/icons/boi.png";

const bankIcons: Record<string, string> = {
    Millenia_Credit: MilleniaCreditIcon,
    HDFC_DEBIT: HdfcDebitIcon,
    ICICI_AMAZON_PAY: IciciAmazonPayIcon,
    YES_BANK_ACE: YesBankAceIcon,
    YES_BANK_DEBIT: YesBankDebitIcon,
    BOI: BoiIcon,
};

export const convertToLocaleString = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
    });
};

export const getFirstAndLastDateOfMonth = (monthYear: string) => {
    // Parse the month and year from the string
    const [monthName, year] = monthYear.split(", ");
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth(); // Get the month index from the name

    // First day of the month
    const firstDate = new Date(Number(year), monthIndex, 2);
    const firstDay = firstDate.toISOString().split("T")[0]; // 'yyyy-mm-dd' format

    // Last day of the month
    const lastDate = new Date(Number(year), monthIndex + 1, 1);
    const lastDay = lastDate.toISOString().split("T")[0]; // 'yyyy-mm-dd' format

    return {
        firstDay,
        lastDay,
    };
};

export const getLast5Months = () => {
    const months = [];
    const currentDate = new Date();

    for (let i = 0; i < 5; i++) {
        const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthName = monthDate.toLocaleString('default', {month: 'long'});
        const year = monthDate.getFullYear();
        months.push(`${monthName}, ${year}`);
    }

    return months;
}


export const getBankIcon = (bankKey: string): string | null => {
    return bankIcons[bankKey] || null;
};
