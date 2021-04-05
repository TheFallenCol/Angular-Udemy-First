using Example.Models;
using System;
using Microsoft.IdentityModel.Tokens;

namespace Example.WebApi.Authentication
{
    public interface ITokenProvider
    {
        string CreateToke(User user, DateTime expirationDateTime);
        TokenValidationParameters GetValidationParameters();
    }
}
