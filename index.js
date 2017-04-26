export default function corsHeaders ({
  allowOrigin = '*',
  allowMethods = 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
  allowHeaders = 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token'
} = {}) {
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': allowMethods,
    'Access-Control-Allow-Headers': allowHeaders
  }
}
