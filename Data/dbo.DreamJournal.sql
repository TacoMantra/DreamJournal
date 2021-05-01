USE [master]
GO
/****** Object:  Database [DreamJournal]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE DATABASE [DreamJournal]
GO
ALTER DATABASE [DreamJournal] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DreamJournal].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DreamJournal] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DreamJournal] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DreamJournal] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DreamJournal] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DreamJournal] SET ARITHABORT OFF 
GO
ALTER DATABASE [DreamJournal] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DreamJournal] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DreamJournal] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DreamJournal] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DreamJournal] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DreamJournal] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DreamJournal] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DreamJournal] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DreamJournal] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DreamJournal] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DreamJournal] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DreamJournal] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DreamJournal] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DreamJournal] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DreamJournal] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DreamJournal] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DreamJournal] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DreamJournal] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DreamJournal] SET  MULTI_USER 
GO
ALTER DATABASE [DreamJournal] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DreamJournal] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DreamJournal] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DreamJournal] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [DreamJournal] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DreamJournal] SET QUERY_STORE = OFF
GO
USE [DreamJournal]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [DreamJournal]
GO
/****** Object:  Table [dbo].[Alarm]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alarm](
	[AlarmId] [int] IDENTITY(1,1) NOT NULL,
	[Time] [time](0) NOT NULL,
	[SoundFile] [nvarchar](50) NOT NULL,
	[UserNum] [int] NOT NULL,
 CONSTRAINT [IX_Alarm] UNIQUE NONCLUSTERED 
(
	[AlarmId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AlarmDays]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AlarmDays](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AlarmId] [int] NOT NULL,
	[Day] [int] NOT NULL,
 CONSTRAINT [PK_AlarmDays] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DaysOfWeek]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DaysOfWeek](
	[DayId] [int] IDENTITY(0,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [IX_DaysOfWeek] UNIQUE NONCLUSTERED 
(
	[DayId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dream]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dream](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserGuid] [uniqueidentifier] NOT NULL,
	[DateIn] [datetime2](7) NOT NULL,
	[Emotion] [int] NOT NULL,
	[PlaceId] [int] NULL,
	[LifeEventId] [int] NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_Dream] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[emotion_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[emotion_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_emotion_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[familiarity_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[familiarity_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_familiarity_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[life_event_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[life_event_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_life_event_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LifeEvent]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LifeEvent](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserGuid] [uniqueidentifier] NOT NULL,
	[Type] [int] NOT NULL,
	[TimeOfOccurrence] [int] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_LifeEvent] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Person]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Person](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserGuid] [uniqueidentifier] NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[RelationshipToUser] [int] NOT NULL,
	[Deceased] [bit] NOT NULL,
	[Type] [int] NOT NULL,
	[Familiarity] [int] NOT NULL,
	[DreamId] [int] NULL,
 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[person_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[person_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_person_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Place]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Place](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserGuid] [uniqueidentifier] NOT NULL,
	[Type] [int] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Realism] [int] NOT NULL,
 CONSTRAINT [PK_Place] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[place_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[place_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_place_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[realism_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[realism_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_realism_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[relationship_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[relationship_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_relationship_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[time_interval_type]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[time_interval_type](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](450) NULL,
 CONSTRAINT [PK_time_interval_type] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserNum] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[JoinedDate] [date] NOT NULL,
	[UserGuid] [uniqueidentifier] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserNum] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_User] UNIQUE NONCLUSTERED 
(
	[UserNum] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [IX_Dream_Emotion]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Dream_Emotion] ON [dbo].[Dream]
(
	[Emotion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Dream_LifeEventId]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Dream_LifeEventId] ON [dbo].[Dream]
(
	[LifeEventId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Dream_PlaceId]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Dream_PlaceId] ON [dbo].[Dream]
(
	[PlaceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_emotion_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_emotion_type_Name] ON [dbo].[emotion_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_familiarity_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_familiarity_type_Name] ON [dbo].[familiarity_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_life_event_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_life_event_type_Name] ON [dbo].[life_event_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_LifeEvent_TimeOfOccurrence]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_LifeEvent_TimeOfOccurrence] ON [dbo].[LifeEvent]
(
	[TimeOfOccurrence] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_LifeEvent_Type]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_LifeEvent_Type] ON [dbo].[LifeEvent]
(
	[Type] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Person_DreamId]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Person_DreamId] ON [dbo].[Person]
(
	[DreamId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Person_Familiarity]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Person_Familiarity] ON [dbo].[Person]
(
	[Familiarity] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Person_RelationshipToUser]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Person_RelationshipToUser] ON [dbo].[Person]
(
	[RelationshipToUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Person_Type]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Person_Type] ON [dbo].[Person]
(
	[Type] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_person_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_person_type_Name] ON [dbo].[person_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Place_Realism]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Place_Realism] ON [dbo].[Place]
(
	[Realism] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Place_Type]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE NONCLUSTERED INDEX [IX_Place_Type] ON [dbo].[Place]
(
	[Type] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_place_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_place_type_Name] ON [dbo].[place_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_realism_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_realism_type_Name] ON [dbo].[realism_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_relationship_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_relationship_type_Name] ON [dbo].[relationship_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_time_interval_type_Name]    Script Date: 4/30/2021 10:00:04 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_time_interval_type_Name] ON [dbo].[time_interval_type]
(
	[Name] ASC
)
WHERE ([Name] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Alarm]  WITH CHECK ADD  CONSTRAINT [FK_Alarm_User] FOREIGN KEY([UserNum])
REFERENCES [dbo].[User] ([UserNum])
GO
ALTER TABLE [dbo].[Alarm] CHECK CONSTRAINT [FK_Alarm_User]
GO
ALTER TABLE [dbo].[AlarmDays]  WITH CHECK ADD  CONSTRAINT [FK_AlarmDays_Alarm] FOREIGN KEY([AlarmId])
REFERENCES [dbo].[Alarm] ([AlarmId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AlarmDays] CHECK CONSTRAINT [FK_AlarmDays_Alarm]
GO
ALTER TABLE [dbo].[AlarmDays]  WITH CHECK ADD  CONSTRAINT [FK_AlarmDays_DaysOfWeek] FOREIGN KEY([Day])
REFERENCES [dbo].[DaysOfWeek] ([DayId])
GO
ALTER TABLE [dbo].[AlarmDays] CHECK CONSTRAINT [FK_AlarmDays_DaysOfWeek]
GO
ALTER TABLE [dbo].[Dream]  WITH CHECK ADD  CONSTRAINT [FK_Dream_emotion_type_Emotion] FOREIGN KEY([Emotion])
REFERENCES [dbo].[emotion_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Dream] CHECK CONSTRAINT [FK_Dream_emotion_type_Emotion]
GO
ALTER TABLE [dbo].[Dream]  WITH CHECK ADD  CONSTRAINT [FK_Dream_LifeEvent_LifeEventId] FOREIGN KEY([LifeEventId])
REFERENCES [dbo].[LifeEvent] ([Id])
GO
ALTER TABLE [dbo].[Dream] CHECK CONSTRAINT [FK_Dream_LifeEvent_LifeEventId]
GO
ALTER TABLE [dbo].[Dream]  WITH CHECK ADD  CONSTRAINT [FK_Dream_Place_PlaceId] FOREIGN KEY([PlaceId])
REFERENCES [dbo].[Place] ([Id])
GO
ALTER TABLE [dbo].[Dream] CHECK CONSTRAINT [FK_Dream_Place_PlaceId]
GO
ALTER TABLE [dbo].[LifeEvent]  WITH CHECK ADD  CONSTRAINT [FK_LifeEvent_life_event_type_Type] FOREIGN KEY([Type])
REFERENCES [dbo].[life_event_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LifeEvent] CHECK CONSTRAINT [FK_LifeEvent_life_event_type_Type]
GO
ALTER TABLE [dbo].[LifeEvent]  WITH CHECK ADD  CONSTRAINT [FK_LifeEvent_time_interval_type_TimeOfOccurrence] FOREIGN KEY([TimeOfOccurrence])
REFERENCES [dbo].[time_interval_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LifeEvent] CHECK CONSTRAINT [FK_LifeEvent_time_interval_type_TimeOfOccurrence]
GO
ALTER TABLE [dbo].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_Dream_DreamId] FOREIGN KEY([DreamId])
REFERENCES [dbo].[Dream] ([Id])
GO
ALTER TABLE [dbo].[Person] CHECK CONSTRAINT [FK_Person_Dream_DreamId]
GO
ALTER TABLE [dbo].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_familiarity_type_Familiarity] FOREIGN KEY([Familiarity])
REFERENCES [dbo].[familiarity_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Person] CHECK CONSTRAINT [FK_Person_familiarity_type_Familiarity]
GO
ALTER TABLE [dbo].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_person_type_Type] FOREIGN KEY([Type])
REFERENCES [dbo].[person_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Person] CHECK CONSTRAINT [FK_Person_person_type_Type]
GO
ALTER TABLE [dbo].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_relationship_type_RelationshipToUser] FOREIGN KEY([RelationshipToUser])
REFERENCES [dbo].[relationship_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Person] CHECK CONSTRAINT [FK_Person_relationship_type_RelationshipToUser]
GO
ALTER TABLE [dbo].[Place]  WITH CHECK ADD  CONSTRAINT [FK_Place_place_type_Type] FOREIGN KEY([Type])
REFERENCES [dbo].[place_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Place] CHECK CONSTRAINT [FK_Place_place_type_Type]
GO
ALTER TABLE [dbo].[Place]  WITH CHECK ADD  CONSTRAINT [FK_Place_realism_type_Realism] FOREIGN KEY([Realism])
REFERENCES [dbo].[realism_type] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Place] CHECK CONSTRAINT [FK_Place_realism_type_Realism]
GO
/****** Object:  StoredProcedure [dbo].[CreateAlarm]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CreateAlarm]
  @Time time(0),
  @SoundFile nvarchar(50),
  @UserId uniqueidentifier,
  @Days nvarchar(25)

AS
  BEGIN
	DECLARE @TempDaysTable TABLE(DayId INT)
	INSERT INTO @TempDaysTable (DayId)
		SELECT value FROM STRING_SPLIT(@Days, ',');

	DECLARE @TempIdTable TABLE(NewAlarmId INT)
	DECLARE @NewAlarmId INT
	
	INSERT INTO Alarm(Time, SoundFile, UserNum)
		OUTPUT INSERTED.AlarmId INTO @TempIdTable

	SELECT @Time, @SoundFile, U.userNum
		FROM[User] AS U WHERE U.UserGuid = @UserId

	SELECT TOP(1) @NewAlarmId = NewAlarmId FROM @TempIdTable
	SET @NewAlarmId = (SELECT TOP(1) NewAlarmId FROM @TempIdTable)

	INSERT INTO AlarmDays(AlarmId, Day) SELECT @NewAlarmId, DayId FROM @TempDaysTable;
  END
GO
/****** Object:  StoredProcedure [dbo].[GetAlarmsForUser]    Script Date: 4/30/2021 10:00:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAlarmsForUser] @UserId uniqueidentifier

AS
  BEGIN
	SELECT A.AlarmId, Time, SoundFile, Name as DayOfWeek FROM Alarm AS A 
		LEFT JOIN [User] AS U ON A.UserNum = U.UserNum 
		LEFT JOIN AlarmDays AS AD ON A.AlarmId = AD.AlarmId 
		LEFT JOIN DaysOfWeek AS D ON AD.Day = D.DayId 
		WHERE U.UserGuid = @UserId
  END
GO
USE [master]
GO
ALTER DATABASE [DreamJournal] SET  READ_WRITE 
GO
