import React from "react";
import { ImageWrapper, SectionTitle, SectionDesc } from "../../../SectionsComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ChatImg1 = "/images/Dealok/chat-1.png";
const ChatImg2 = "/images/Dealok/chat-2.png";

export const Chat = () => {
  return (
    <section id="dealok-chat">
      <div className="container-plus">
				<Row className="dealok-chat-title">
					<Col xl={8}>
						<SectionTitle title="Chat" />
					</Col>
					<Col xl={8}>
						<SectionDesc>
							Для того, чтобы до конца понять задачу, нужно уточнить детали проекта. Для этого в платформе мы разработали чат, где встроили элементы управления сделкой.
						</SectionDesc>
					</Col>
				</Row>
      </div>
			<ImageWrapper src={ChatImg1} className="chat-1" />
			<div className="container-plus">
				<ImageWrapper src={ChatImg2} className="chat-2" />
      </div>
    </section>
  );
};