USE [master]
GO
/****** Object:  Database [DreamJournal]    Script Date: 4/11/2021 7:03:35 PM ******/
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
/****** Object:  Table [dbo].[Alarm]    Script Date: 4/11/2021 7:03:36 PM ******/
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
/****** Object:  Table [dbo].[AlarmDays]    Script Date: 4/11/2021 7:03:36 PM ******/
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
/****** Object:  Table [dbo].[DaysOfWeek]    Script Date: 4/11/2021 7:03:36 PM ******/
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
/****** Object:  Table [dbo].[User]    Script Date: 4/11/2021 7:03:36 PM ******/
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
/****** Object:  StoredProcedure [dbo].[CreateAlarm]    Script Date: 4/11/2021 7:03:36 PM ******/
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
/****** Object:  StoredProcedure [dbo].[GetAlarmsForUser]    Script Date: 4/11/2021 7:03:36 PM ******/
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

/**************
START SEED DATA 
**************/
USE DreamJournal

INSERT INTO DaysOfWeek (Name) VALUES ('Sunday'), ('Monday'), ('Tuesday'), ('Wednesday'), ('Thursday'), ('Friday'), ('Saturday');

/*** Manufactuer a GUID for demo purposes with a fake user ***/
INSERT INTO [User] (FirstName, LastName, JoinedDate, UserGuid) VALUES ('Jon', 'Snow', GETDATE(), '64C64D4B-BBE5-4411-AC1F-97217E79B204');

INSERT INTO Alarm (Time, SoundFile, UserNum) VALUES ('07:30AM', 'windchimes', 1);

INSERT INTO AlarmDays (AlarmId, Day) VALUES ('1', '2'), ('1', '3'), ('1', '4'), ('1', '5'), ('1', '6');
/**************
END SEED DATA 
**************/