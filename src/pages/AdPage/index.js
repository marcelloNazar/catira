import React, { useEffect, useState } from "react";
import { Fake, PageArea, OthersArea, BreadChumb } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import API from "../../helpers/API";
import { useParams, Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import AdItem from "../../components/partials/AdItem";

export default function SignIn() {
  const api = API();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  useEffect(() => {
    const getAdInfo = async (id) => {
      const json = await api.getAd(id, true);
      setAdInfo(json);
      setLoading(false);
    };
    getAdInfo(id);
  }, []);

  const formatDate = (date) => {
    let cDate = new Date(date);

    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    let cDay = cDate.getDate();
    let cMounth = cDate.getMonth();
    let cYear = cDate.getFullYear();

    return `${cDay} do ${months[cMounth]} de ${cYear}`;
  };

  return (
    <PageContainer>
      {adInfo.category && (
        <BreadChumb>
          Voce está aqui:
          <Link to="/">Home</Link>/
          <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>/
          <Link
            to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}
          >
            {adInfo.category.name}
          </Link>
          / {adInfo.title}
        </BreadChumb>
      )}
      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="adImage">
              {loading && <Fake heigth={300} />}

              {adInfo.images && (
                <Slide>
                  {adInfo.images.map((img, k) => {
                    <div key={k} className="slide">
                      <img src={img} alt="500" />
                    </div>;
                  })}
                </Slide>
              )}
            </div>
            <div className="adInfo">
              <div className="adName">
                {loading && <Fake heigth={20} />}
                {adInfo.title && <h2>{adInfo.title}</h2>}
                {adInfo.dateCreated && (
                  <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                )}
              </div>
              <div className="adDescription">
                {loading && <Fake heigth={100} />}
                {adInfo.description}
                <hr />
                {adInfo.views && <small>Vizualizações: {adInfo.views}</small>}
              </div>
            </div>
          </div>
        </div>
        <div className="rigthSide">
          <div className="box box--padding">
            {loading && <Fake heigth={20} />}
            {adInfo.priceNegotiable && "Preço Negociavel"}
            {!adInfo.priceNegotiable && adInfo.price && (
              <div className="price">
                Preço: <span>`R$ ${adInfo.price}`</span>
              </div>
            )}
          </div>
          {loading && <Fake heigth={50} />}
          {adInfo.userInfo && (
            <>
              <a
                href={`mailto:${adInfo.userInfo.email}`}
                target="_blank"
                className="contact"
              >
                Fale com o vendedor
              </a>
              <div className="createdBy box box--padding">
                Propietario:
                <strong>{adInfo.userInfo.name}</strong>
                <small>E-mail: {adInfo.userInfo.email}</small>
                <small>Estado: {adInfo.stateName}</small>
              </div>
            </>
          )}
        </div>
      </PageArea>
      <OthersArea>
        {adInfo.others && (
          <>
            <h2>Outras ofertas do vendedor:</h2>
            <div>
              {adInfo.others.map((i, k) => {
                <AdItem key={k} data={i} />;
              })}
            </div>
          </>
        )}
      </OthersArea>
    </PageContainer>
  );
}
