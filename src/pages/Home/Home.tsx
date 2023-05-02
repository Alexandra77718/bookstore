 import React, { FC, useEffect, useState} from 'react';
import styles from './Home.module.scss';
import Title from 'src/components/Title/Title';
import Tabs from 'src/components/Tabs/Tabs';
import CardsList from 'src/components/CardsList/CardsList';
import { CardType } from 'src/components/Card/types';

export const MOCK_ARRAY = [
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "2781617294136" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "1781617297836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781627297836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617297436" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781717297836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781111197836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9771617297836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617197836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617291836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617237836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617217836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617197836" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
    {
        error: "0",
        title: "Securing DevOps",
        subtitle: "Security in the Cloud" ,
        authors: "Julien Vehent" ,
        publisher: "Manning" ,
        isbn10: "1617294136" ,
        isbn13: "9781617297816" ,
        pages: "384" ,
        year: "2018" ,
        rating: "5",
        desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
        price: "$26.98",
        image: "https://itbook.store/img/books/9781617294136.png",
        url: "https://itbook.store/books/9781617294136",
        pdf: {
                  'Chapter 2': "https://itbook.store/files/9781617294136/chapter2.pdf",
                 'Chapter 5': "https://itbook.store/files/9781617294136/chapter5.pdf",
               }
    },
      
]

const Home = () => {
    const [cardsList, setCardsList] = useState<CardType[]>([]);

    useEffect(() => {
      setCardsList(MOCK_ARRAY);
    }, [MOCK_ARRAY]);
  
    return (
      <div>
        <Title title={"New Releases Books"} />
        <CardsList cardsList={cardsList} />
      </div>
    );
}

export default Home;