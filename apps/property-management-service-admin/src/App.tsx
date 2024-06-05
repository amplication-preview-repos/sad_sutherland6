import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { OwnerList } from "./owner/OwnerList";
import { OwnerCreate } from "./owner/OwnerCreate";
import { OwnerEdit } from "./owner/OwnerEdit";
import { OwnerShow } from "./owner/OwnerShow";
import { CleaningTeamList } from "./cleaningTeam/CleaningTeamList";
import { CleaningTeamCreate } from "./cleaningTeam/CleaningTeamCreate";
import { CleaningTeamEdit } from "./cleaningTeam/CleaningTeamEdit";
import { CleaningTeamShow } from "./cleaningTeam/CleaningTeamShow";
import { RentList } from "./rent/RentList";
import { RentCreate } from "./rent/RentCreate";
import { RentEdit } from "./rent/RentEdit";
import { RentShow } from "./rent/RentShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { MandateList } from "./mandate/MandateList";
import { MandateCreate } from "./mandate/MandateCreate";
import { MandateEdit } from "./mandate/MandateEdit";
import { MandateShow } from "./mandate/MandateShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { AgentList } from "./agent/AgentList";
import { AgentCreate } from "./agent/AgentCreate";
import { AgentEdit } from "./agent/AgentEdit";
import { AgentShow } from "./agent/AgentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PropertyManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="Owner"
          list={OwnerList}
          edit={OwnerEdit}
          create={OwnerCreate}
          show={OwnerShow}
        />
        <Resource
          name="CleaningTeam"
          list={CleaningTeamList}
          edit={CleaningTeamEdit}
          create={CleaningTeamCreate}
          show={CleaningTeamShow}
        />
        <Resource
          name="Rent"
          list={RentList}
          edit={RentEdit}
          create={RentCreate}
          show={RentShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="Mandate"
          list={MandateList}
          edit={MandateEdit}
          create={MandateCreate}
          show={MandateShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Agent"
          list={AgentList}
          edit={AgentEdit}
          create={AgentCreate}
          show={AgentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
