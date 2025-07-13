import { JobStatus, Job } from '../models/job.model';
import JobDao from '../dao/job.dao';

export async function updateJob(
  id: any,
  status: any,
  progress: string,
  errMsg?: string,
  payload?: any
): Promise<Job> {
  if (!id || typeof id !== 'string') {
    throw new Error('Invalid job ID');
  }

  if (!Object.values(JobStatus).includes(status)) {
    throw new Error('Invalid job status');
  }

  const updatedJob = await JobDao.update(id, {
    status,
    progress,
    errorMessage: errMsg,
    payload,
  });

  return updatedJob;
}
