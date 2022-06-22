import React, { FunctionComponent } from "react";

const MessageSection: FunctionComponent = () => {
    return (
        <div style={{ width: "55%", marginRight: "2%" }}>
            <form id="1" className="messagesForm" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "45%" }}>
                <div style={{ display: "flex", width: "100%", marginTop: "5%" }}>
                    <label style={{ whiteSpace: "pre" }}>Send message: </label>
                    <input style={{ width: "100%" }} />
                </div>
                <button className="messageButton" type="submit" style={{ alignSelf: "end", marginTop: "1%", padding: "0px 4%" }}>Send</button>
            </form>
            <div>
                <hr className="hrLastMessages" />
            </div>
            <div className="messageBoard" style={{ width: "100%", height: "42%", overflowX: "hidden" }} />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}>
                <button className="sortMessagesBtn">Sort Messages</button>
            </div>
        </div>
    );
};

export default MessageSection;