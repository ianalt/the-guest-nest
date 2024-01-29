-- AlterTable
ALTER TABLE `meeting_participants` ADD COLUMN `answer` ENUM('Confirmed', 'Declined', 'Tentative') NULL;
