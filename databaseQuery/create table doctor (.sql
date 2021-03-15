create table doctor (
	createdAt datetime not null,
    updatedAt datetime,
    deletedAt datetime,
    id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
    name VARCHAR(120) NOT NULL,
    crm VARCHAR(7) UNIQUE NOT NULL,
    phone VARCHAR(10),
    cellphone VARCHAR(11) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    publicPlace varchar(100),
    complement varchar(100),
    neighborhood varchar(100),
    locality varchar(100),
    uf varchar(2),
    specialty SET('ALERGOLOGIA','ANGIOLOGIA','BUCO MAXILO', 'CARDIOLOGIA CLÍNICA', 'CARDIOLOGIA INFANTIL', 'CIRURGIA CABEÇA E PESCOÇO', 'CIRURGIA CARDÍACA', 'CIRURGIA DE TÓRAX') not null
);